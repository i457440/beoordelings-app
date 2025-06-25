import { ReactNode } from 'react';

type VergelijkModalProps = {
  onClose: () => void;
  title?: string;
  children?: ReactNode;
};

export default function VergelijkModal({ onClose, title, children }: VergelijkModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-screen-xl rounded-lg shadow-lg overflow-hidden">
        {/* Gele header */}
        <div className="bg-[#F2B423] text-white px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title || 'Vergelijk documenten'}</h2>
          <button
            className="text-white text-2xl leading-none hover:text-gray-100"
            onClick={onClose}
            aria-label="Sluiten"
          >
            &times;
          </button>
        </div>

        {/* Body met 3 documenten */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Leverancier 1</h3>
              <object
                data="/storage/documents/leverancier-1.pdf"
                type="application/pdf"
                className="w-full h-[500px]"
              >
                <p>PDF kan niet worden geladen.</p>
              </object>
            </div>

            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Leverancier 2</h3>
              <object
                data="/storage/documents/leverancier-2.pdf"
                type="application/pdf"
                className="w-full h-[500px]"
              >
                <p>PDF kan niet worden geladen.</p>
              </object>
            </div>

            <div className="border rounded p-4">
              <h3 className="font-bold mb-2">Leverancier 3</h3>
              <object
                data="/storage/documents/leverancier-3.pdf"
                type="application/pdf"
                className="w-full h-[500px]"
              >
                <p>PDF kan niet worden geladen.</p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
