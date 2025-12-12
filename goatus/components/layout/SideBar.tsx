import React from 'react';
import { Settings, LogOut, Home } from 'lucide-react'; 

interface SidebarDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidebarDrawer({ isOpen, onClose }: SidebarDrawerProps) {
    
    // isOpen が false の場合は何もレンダリングしない
    if (!isOpen) return null;

    // メニュー項目
    const menuItems = [
        { label: "ホーム", icon: Home},
        { label: "設定", icon: Settings},
    ];
    
    // ログアウトは特別なアクションとして扱う
    const handleLogout = () => {
        alert('ログアウト処理を実行');
        onClose();
    };

    return (
        // オーバーレイコンテナ (画面全体を覆い、クリックで閉じる)
        <div 
            className="fixed inset-1 z-50 flex" // flex items-end ではなく flex のみ（左端基準のため）
            onClick={onClose} 
        >
            {/* 1. 背景の半透明のオーバーレイ */}
            <div 
                className="absolute inset-0 bg-black/50 transition-opacity duration-300" 
            />

            {/* 2. サイドバードロワー本体 */}
            {/* 初期位置を translate-x-full (右に100%移動 = 画面外) にし、
               isOpen 時に translate-x-0 (元の位置) に戻す */}
            <div 
                className={`fixed left-0 top-0 h-full w-64 bg-gray-900 shadow-2xl transition-transform duration-300 
                            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} // 左から出てくるように -translate-x-full
                onClick={(e) => e.stopPropagation()} // ドロワー内クリックで閉じないように阻止
            >
                {/* ヘッダーやプロフィール情報など */}
                <div className="p-4 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">メニュー</h2>
                </div>

                {/* メニュー項目 */}
                <nav className="p-4 space-y-1">
                    {menuItems.map((item) => (
                        <button 
                            key={item.label}
                            className="w-full text-left flex items-center gap-3 p-3 rounded-lg text-white/90 hover:bg-white/10 transition hover:cursor-pointer"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* ログアウトボタン（下端に固定することも多い） */}
                <div className="absolute bottom-4 w-full px-4">
                    <button 
                        className="w-full text-left flex items-center gap-3 p-3 rounded-lg text-red-400 hover:bg-white/10 transition"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-5 w-5" />
                        <span>ログアウト</span>
                    </button>
                </div>
            </div>
        </div>
    );
}