import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
interface PDFViewerProp {
    file: string
}
const PDFViewer = ({ file }: PDFViewerProp) => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    console.log('file inviewer', file)
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div className='nmt-4'>
            <div className=''>
                <div className='nflex njustify-end npy-4 ngap-4 nitems-center'>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <Button disabled={pageNumber === 1} onClick={() => setPageNumber((prev) => prev - 1)} variant={'secondary'}>Prev Page</Button>
                    <Button disabled={pageNumber === numPages} variant={'secondary'} onClick={() => setPageNumber((prev) => prev + 1)}>Next Page</Button>


                </div>
            </div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={400} width={600} pageNumber={pageNumber} />
            </Document>


        </div >
    );
}

export default PDFViewer