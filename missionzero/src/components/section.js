import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.newzealand.com/assets/Tourism-NZ/Northland-Bay-of-Islands/Waitangi-Treaty-Grounds-Northland-Camilla-Rutherford__aWxvdmVrZWxseQo_FocalPointCropWzUyNSwxNDQwLDQ4LDYxLDc1LCJqcGciLDY1LDIuNV0.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Haere Mai Welcome</h2>
          <div className="">
            <input type="text" value="Auckland"></input>
            <button type="search">Seek</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.newzealand.com/assets/Operator-Database/a93bb0a197/img-1578740501-199-23991-p-B7EADECD-D9D4-2BB8-B83492715B35F77F-2544003__aWxvdmVrZWxseQo_FocalPointCropWzUyNSwxNDQwLDY2LDUxLDc1LCJqcGciLDY1LDIuNV0.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.newzealand.com/assets/Tourism-NZ/Wairarapa/e84230c80b/img-1536208132-1096-3076-513D2F56-CF17-C1F3-C30476F77B672ECA__aWxvdmVrZWxseQo_FocalPointCropWzUyNSwxNDQwLDQ5LDQ0LDc1LCJqcGciLDY1LDIuNV0.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
