import React from "react";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const TableCard = () => {
  const productList = [
    {
      imgUrl: "/assets/images/products/headphone-2.jpg",
      name: "Ministry of Disaster Management",
      country: "Rwanda",
      price: 100,
      score: 4,
      done_at: "12/06/2021",
      available: 15
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "Ministry of Health",
      country: "Kenya",
      price: 1500,
      score: 2,
      done_at: "12/06/2021",
      available: 30
    },
    {
      imgUrl: "/assets/images/products/iphone-2.jpg",
      name: "Ministry of Disaster Management",
      country: "Burundi",
      price: 1900,
      score: 4,
      done_at: "12/06/2021",
      available: 35
    },
    {
      imgUrl: "/assets/images/products/iphone-1.jpg",
      name: "Ministry of Familly Planning",
      country: "Uganda",
      price: 100,
      score: 3,
      done_at: "12/06/2021",
      available: 0
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "Ministry of Health",
      country: "Nigeria",
      price: 1190,
      score: 1,
      done_at: "12/06/2021",
      available: 5
    }
  ];

  return (
    <Card elevation={3} className="pt-5 mb-6">
      <div className="card-title px-6 mb-3">Latest Submittion</div>
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow>
              <TableCell className="px-6" colSpan={2}>
                Organisation Name
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Country
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                Total Score 
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                Done At
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={2} align="left">
                  <div className="flex items-center">
                    {/* <img
                      className="circular-image-small"
                      src={product.imgUrl}
                      alt="user"
                    /> */}
                    <p className="m-0 ml-8">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" colSpan={2} align="left">
                  <div className="flex items-center">
                    
                    <p className="m-0 ml-8">{product.country}</p>
                  </div>
                </TableCell>
               
                {/* <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  $
                  {product.score > 999
                    ? (product.score / 1000).toFixed(1) + "k"
                    : product.price}
                </TableCell> */}

                <TableCell className="px-0" align="left" colSpan={2}>
                  {product.score ? (
                    (product.score <= 3 && product.score>1)? (
                      <small className="border-radius-4 bg-secondary text-white px-2 py-2px ">
                        {product.score} - medium score
                      </small>
                    ) : ((product.score < 2 )?(<small className="border-radius-4 bg-error text-white px-2 py-2px ">
                    {product.score} - scored low
                  </small>):(<small className="border-radius-4 bg-primary text-white px-2 py-2px ">
                        {product.score} - scored high
                      </small>)
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-2 py-2px ">
                       no score 
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  {product.done_at}
                </TableCell>
                {/* <TableCell className="px-0" align="left" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <small className="border-radius-4 bg-secondary text-white px-2 py-2px ">
                        {product.available} available
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-primary text-white px-2 py-2px ">
                        in stock
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-2 py-2px ">
                      out of stock
                    </small>
                  )}
                </TableCell> */}
                <TableCell className="px-0" colSpan={1}>
                  <IconButton>
                    <Icon color="primary">arrow_right_alt</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default TableCard;
