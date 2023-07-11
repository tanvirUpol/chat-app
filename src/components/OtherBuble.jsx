const OtherBuble = ({message}) => {
    return (
        <div className="chat-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-base  max-w-xs mx-2 order-2 items-start">
                    <div>
                        <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-800">
                           {message.text}
                        </span>
                    </div>
                </div>
                <img
                    src={`https://robohash.org/${message.uid}`}
                    alt="My profile"
                    className="w-8 h-8 rounded-full order-1 bg-slate-800"
                />
            </div>
        </div>
    )
}
export default OtherBuble