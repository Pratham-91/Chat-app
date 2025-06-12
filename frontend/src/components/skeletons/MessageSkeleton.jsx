const MessageSkeleton = () => {
    return (
        <div className="space-y-6 py-2">
            {/* Incoming message skeleton */}
            <div className="flex items-end gap-3">
                <div className="skeleton w-11 h-11 rounded-full shadow-md bg-gradient-to-br from-blue-300/40 to-blue-500/30" />
                <div className="flex flex-col gap-2">
                    <div className="skeleton h-4 w-44 rounded-lg bg-white/30" />
                    <div className="skeleton h-4 w-32 rounded-lg bg-white/20" />
                </div>
            </div>
            {/* Outgoing message skeleton */}
            <div className="flex items-end gap-3 justify-end">
                <div className="flex flex-col gap-2 items-end">
                    <div className="skeleton h-4 w-36 rounded-lg bg-blue-400/30" />
                </div>
                <div className="skeleton w-11 h-11 rounded-full shadow-md bg-gradient-to-br from-blue-400/40 to-blue-700/30" />
            </div>
        </div>
    );
};

export default MessageSkeleton;