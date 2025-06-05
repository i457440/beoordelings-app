import { X } from 'lucide-react';

export default function PasswordModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative">
        <button onClick={onClose} className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-[#28424F]" style={{ fontFamily: '"Titillium Web", sans-serif' }}>
          Wachtwoord vergeten
        </h2>

        <p className="text-sm text-[#28424F] mb-4" style={{ fontFamily: '"Roboto", sans-serif' }}>
          Neem contact op met Contractables om een nieuw of hetzelfde wachtwoord aan te vragen
        </p>

        <div className="space-y-2 mb-6 text-[#28424F]" style={{ fontFamily: '"Roboto", sans-serif' }}>
          <p className="flex items-center gap-2">
            <span>📧</span> <a href="mailto:support@contractables.nl" className="text-[#F2B423] underline">support@contractables.nl</a>
          </p>
          <p className="flex items-center gap-2">
            <span>📞</span> 030 - 123 4567
          </p>
        </div>

        <button
          onClick={onClose}
          className="bg-[#F2B423] text-white px-4 py-2 rounded-md w-full hover:bg-[#e0a91f] transition cursor-pointer"
        >
          Terug naar inloggen
        </button>
      </div>
    </div>
  );
}
