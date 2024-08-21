import { createPortal } from "react-dom";

export default function Modal({
  isClosed,
  setIsClosed,
  header,
  footer,
  children,
}) {
  return createPortal(
    <div
      onClick={(e) => {
        setIsClosed(true);
        e.stopPropagation();
      }}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4 ${isClosed ? "hidden" : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="-mx-4 my-3 flex flex-wrap gap-4 border-y px-4 py-4">
          {children}
        </div>
        <div className="flex justify-end gap-4">{footer}</div>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}
