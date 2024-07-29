import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ChatWindow({ messages }) {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const chatWindowRef = useRef(null);

    useEffect(() => {
        const chatWindow = chatWindowRef.current;
        if (chatWindow) {
            const isScrolledToBottom = chatWindow.scrollHeight - chatWindow.clientHeight <= chatWindow.scrollTop + 1;
            setShowScrollButton(!isScrolledToBottom);
        }
    }, [messages]);

    const handleScroll = () => {
        const chatWindow = chatWindowRef.current;
        if (chatWindow) {
            const isScrolledToBottom = chatWindow.scrollHeight - chatWindow.clientHeight <= chatWindow.scrollTop + 1;
            setShowScrollButton(!isScrolledToBottom);
        }
    };

    const scrollToBottom = () => {
        const chatWindow = chatWindowRef.current;
        if (chatWindow) {
            chatWindow.scrollTo({
                top: chatWindow.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    const renderMessage = (message) => {
        return (
            <ReactMarkdown
                children={message}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        );
    }

    return (
        <div className="chat-window-container">
            <div
                className="chat-window"
                ref={chatWindowRef}
                onScroll={handleScroll}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.isUser ? 'user' : 'bot'}`}
                    >
                        {renderMessage(message.text)}
                    </div>
                ))}
            </div>
            {showScrollButton && (
                <button className="scroll-to-bottom" onClick={scrollToBottom} aria-label="Scroll to bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M11 4h2v12l5.5-5.5 1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5 11 16V4z" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default ChatWindow;