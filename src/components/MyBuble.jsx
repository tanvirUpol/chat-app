const MyBuble = ({message}) => {
  return (
    <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-base max-w-xs mx-2 order-1 items-end">
                <div>
                  <p className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white max-w-md">
                    {message.text}
                  </p>
                </div>
              </div>
              <img
                src={`https://robohash.org/${message.uid}/`}
                alt="My profile"
                className="w-8 h-8 rounded-full order-2 bg-slate-800"
              />
            </div>
    </div>
  )
}
export default MyBuble