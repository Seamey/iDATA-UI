import { ModalNewProjectProps } from "@/lib/definitions";

export default function NewProject({ onClose, children }: ModalNewProjectProps) {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-between items-center mb-3">
                            <p className='text-h18 font-semibold'>New Project</p>
                            <button className="btn btn-square btn-sm" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
