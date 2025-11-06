// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require('json-server')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация
// реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
        const { users = [] } = db

        const userFromBd = users.find((user) => user.username === username && user.password === password)

        if (userFromBd) {
            // Генерируем простой токен (base64 от username для мока)
            const token = Buffer.from(userFromBd.username).toString('base64')
            return res.json({
                ...userFromBd,
                token,
            })
        }

        return res.status(403).json({ message: 'User not found' })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

// Middleware для проверки авторизации
server.use((req, res, next) => {
    if (req.path === '/login') {
        return next() // Логин не требует авторизации
    }

    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1] // Bearer token

    if (!token) {
        return res.status(403).json({ message: 'Invalid authorization header' })
    }

    try {
        const username = Buffer.from(token, 'base64').toString()
        // Можно добавить проверку пользователя в БД, но для мока пропустим
        req.user = { username }
        next()
    } catch (e) {
        return res.status(403).json({ message: 'Invalid token' })
    }
})

// Кастомные эндпоинты для профиля
server.get('/profile', (req, res) => {
    try {
        const { username } = req.user
        const dbPath = path.resolve(__dirname, 'db.json')
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
        const { users = [], profiles = [] } = db

        // Находим userId по username
        const user = users.find((u) => u.username === username)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Находим профиль по userId
        const profile = profiles.find((p) => p.userId == user.id) // == для string/number
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' })
        }

        res.json(profile)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

server.put('/profile', (req, res) => {
    try {
        const { username } = req.user
        const dbPath = path.resolve(__dirname, 'db.json')
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'))
        const { users = [], profiles = [] } = db

        // Находим userId по username
        const user = users.find((u) => u.username === username)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Находим профиль по userId
        const profileIndex = profiles.findIndex((p) => p.userId == user.id)
        if (profileIndex === -1) {
            return res.status(404).json({ message: 'Profile not found' })
        }

        // Обновляем профиль
        const updatedProfile = { ...profiles[profileIndex], ...req.body }
        profiles[profileIndex] = updatedProfile

        // Записываем обратно в файл
        fs.writeFileSync(dbPath, JSON.stringify({ ...db, profiles }, null, 2))

        res.json(updatedProfile)
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: e.message })
    }
})

// Остальные роуты из json-server (posts, comments и т.д.)
server.use(router)

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port')
})
