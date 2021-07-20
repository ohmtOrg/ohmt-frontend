import React, { Fragment, useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import TableBody from "../../../components/CustomTable/TableBody";
import TableHeader from "../../../components/CustomTable/TableHeader";
import { getCountryData } from "../../../services/countriesService";
import { Button } from "@material-ui/core";

const CountryReport = ({ match }) => {
  const componentRef = useRef();
  const [countryData, setCountryData] = useState({
    name: "",
    population: "",
    size: "",
    domains: [],
  });

  useEffect(() => {
    // const countryId = Number(match.params.id);
    const country = getCountryData(1);
    setCountryData(country);
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const columns = [
    {
      path: "name",
      label: "#",
    },
    { path: "score", label: "Score" },
    { path: "action", label: "Action" },
    { path: "timeline", label: "Implementation Timeline" },
    { path: "responsible", label: "Responsible" },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-5">
        <h3 className="mb-0 text-capitalize">{`${countryData.name} Report`}</h3>
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Download PDF
        </Button>
      </div>

      <table className="table table-bordered" ref={componentRef}>
        <TableHeader columns={columns} />
        {countryData.domains.map((item, index) => (
          <Fragment key={index}>
            <tbody>
              <tr className="text-center text-white bg-dark">
                <td colSpan="6" className="text-uppercase h4">
                  {item.name}
                </td>
              </tr>
            </tbody>
              {item.categories.map((i, index) => (
                <Fragment key={index}>
                <tbody>
                  <tr className="text-center text-white bg-primary">
                    <td colSpan="6" className="h6">
                      {i.name}
                    </td>
                  </tr>
                </tbody>
                  <TableBody columns={columns} data={i.subcategories} />
                </Fragment>
              ))}
            
          </Fragment>
        ))}
      </table>
    </div>
  );
};

export default CountryReport;
