import { Dialog } from "@headlessui/react";

export default function ModalViewer({ selectedTile, closeModal, riddle }) {
  return (
    <Dialog open={!!selectedTile} onClose={closeModal}>
      <Dialog.Panel className="modal-overlay">
        <div className="modal-box">
          <Dialog.Title className="modal-title">{selectedTile}.txt</Dialog.Title>
          <pre className="modal-content">
  {riddle?.question || "No riddle available for this tile."}
</pre>

          <button className="modal-close" onClick={closeModal}>CLOSE</button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}