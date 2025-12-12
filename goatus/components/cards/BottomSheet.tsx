// BottomSheet.tsx
import React from 'react';

type MenuItem = {
    label: string;
    icon: React.ReactNode; 
    // onClick は外部で定義し、このコンポーネントではアラート代わりに実行する
    // action: () => void; 
};

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[];
}

export default function BottomSheet({ isOpen, onClose, menuItems }: BottomSheetProps) {
    
    // isOpen が false の場合は何もレンダリングしない
    if (!isOpen) return null;

    return (
        // オーバーレイ (背景を暗くする部分)
        // fixed, inset-0 で画面全体を覆い、z-50 で最前面に表示
        <div 
            className="fixed inset-0 z-50 flex items-end justify-center"
            // オーバーレイをクリックしたら閉じる
            onClick={onClose} 
        >
            <div 
                className="absolute inset-0 bg-black/50 transition-opacity duration-300" 
            />
            <div 
                className={`bg-gray-800 rounded-t-2xl w-full max-w-md shadow-2xl transition-transform duration-300 
                            ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                // ボトムシート自体をクリックしてもオーバーレイが閉じないように阻止
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="p-2">
                    {/* メニューハンドル（上部のバー） */}
                    <div className="flex justify-center p-2">
                        <div className="w-10 h-1 bg-white/20 rounded-full" />
                    </div>

                    {/* メニュー項目 */}
                    <nav className="py-2">
                        {menuItems.map((item) => (
                            <button 
                                key={item.label}
                                className="w-full text-left flex items-center gap-3 p-4 text-white/90 hover:bg-white/10 transition hover:cursor-pointer"
                            >
                                <span className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-xs">{item.icon}</span> 
                                <span className="text-base">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* キャンセルボタン（オプション） */}
                    <div className="p-2">
                         <button 
                            className="w-full py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition"
                            onClick={onClose}
                         >
                            キャンセル
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}