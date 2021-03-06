import React, { Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { getReports} from "../../../redux/actions/ReportAction";
import { useReactToPrint } from "react-to-print";
import TableBody from "../../../components/CustomTable/TableBody";
import TableHeader from "../../../components/CustomTable/TableHeader";
import { Button } from "@material-ui/core";

const map = document.getElementById("svgMap");
const CountryReport = ({ match, reports, getReports }) => {
  const componentRef = useRef();

  useEffect(() => {
    getReports();
  }, []);

  map.style.display ="none"

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const reportInfo = reports.find(i => i._id === match.params.id);

  const countryData = {
    id: reportInfo && reportInfo._id,
    countryName: reportInfo && reportInfo.author[0].country,
    domains: [
      {
        id: 1,
        name: "Governance",
        categories: (reportInfo && reportInfo.gov.map(i => ({
          name: i.name,
          score: i.value,
          action: "",
          priority: "",
          timeline: "",
          resources: "",
          responsible: "",
        })) ) || [],
      },
      {
        id: 2,
        name: "implementation and performance",
        categories: (reportInfo && reportInfo.impl.map(i => ({
          name: i.name,
          score:i.value,
          action: "",
          priority: "",
          timeline: "",
          resources: "",
          responsible: "",
        })) ) || [],
      }
    ]
  }

  const columns = [
    { path: "name", label: "#" },
    { path: "score", label: "Score" },
    { path: "action", label: "Action" },
    { path: "priority", label: "Implentation Priority" },
    { path: "timeline", label: "Implementation Timeline" },
    { path: "resources", label: "Resources / Tools" },
    { path: "responsible", label: "Responsible" },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-5">
        <h3 className="mb-0 text-capitalize">{`${countryData.countryName || 'N/A'} Report`}</h3>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>

      <table className="table table-bordered" ref={componentRef}>
        <TableHeader columns={columns} />
        {countryData && countryData.domains.map((item, index) => (
          <Fragment key={index}>
            <tbody>
              <tr className="text-center text-white bg-dark">
                <td colSpan="7" className="text-uppercase h4">
                  {item.name}
                </td>
              </tr>
              <tr className="text-center text-black">
                <td colSpan="7" className="h6">
                  {item.name}
                </td>
              </tr>
            </tbody>

          <TableBody columns={columns} data={item.categories} />
          </Fragment>
        ))}
      </table> 
    </div>
  );
};

const mapStateToProps = (state) => ({
  reports: state.reports.reports,
});

export default connect(mapStateToProps, { getReports })(CountryReport);
