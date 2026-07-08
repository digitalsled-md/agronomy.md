'use client';
import React from "react";

export default function Modal({ isOpen, children, onClose }: { isOpen: boolean; children: React.ReactNode; onClose: () => void }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white border border-gray-300 p-6 shadow-2xl transition-all">

                <button
                    onClick={onClose}
                    className="text-zinc-400 hover:text-black transition-colors text-xl p-1"
                >
                    ✕
                </button>
                <div>
                    {children}

                </div>
            </div>
        </div>
    )
}