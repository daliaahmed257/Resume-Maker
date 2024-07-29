import { PDFExport } from '@progress/kendo-react-pdf';
import { Link } from 'react-router-dom';

const Download = ({pdfExportComponent}) => {

    const exportPDF = () => {
        if (pdfExportComponent.current) {
          pdfExportComponent.current.save();
        }
      }

    return (
        <div className="d-flex justify-content-between mb-3">
            <Link to="/education">
                <button className="btn btn-outline-secondary" type="submit">Back</button>
            </Link>
                <button className="btn btn-add" type="submit" onClick={exportPDF}>Download</button>
        </div>
    )
}

export default Download