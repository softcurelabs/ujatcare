import { Card } from "react-bootstrap";
import { NoticesType } from "../../../types/NoticeType";

interface NoticeHighlightType {
  noticeHighlights: NoticesType;
}

const NoticeHighlight = ({ noticeHighlights }: NoticeHighlightType) => {
  return (
    <>
      <Card className="bg-warning text-dark">
        <Card.Body>
          <h4 className="header-title text-dark mb-3">Bulletin Board</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
              <thead className="text-dark">
                <tr>
                  <th>Title</th>
                  <th>Published On </th>
                </tr>
              </thead>
              <tbody>
                {(noticeHighlights.data || []).map((item) => {
                  return (
                    <tr key={"notice" + item.id}>
                      <td>
                        <h5 className="m-0 fw-normal text-dark">{item.title}</h5>
                      </td>
                      <td className="text-dark">{item.schedule_date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NoticeHighlight;
