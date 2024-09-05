const DeleteButton = (fn: () => void, text: string, className: string) => (
    <>
        <button onClick={fn} className={className}>
            {text}
        </button>
    </>
)

export default DeleteButton
