const ReturnPolicy = () => {
  return (
    <div className=" flex flex-col items-center mt-10 md:mt-26">
      <div className=" h-[900ox] md:h-[600px] w-[240px] md:w-[700px]  ">
        <h1 className="font-semibold ">RETURN POLICY</h1>
        <p className=" my-6 ">
          At Tsonga queens , we strive to provide you with the best products and
          services. If you are not completely satisfied with your purchase, we
          are here to help. To initiate a return, please contact our customer
          service team Provide your order number and reason for the return.
          After approval, we will send you a return shipping label.
        </p>
        <h2 className="font-semibold">Refunds</h2>
        <p className=" mb-5">
          We offer refunds with a 15% fee deducted from the product price.
          Refunds will be processed within 7-14 days of receiving your returned
          item. - The refund will be issued to the original payment method used
          at the time of purchase.
        </p>
        <h2 className="font-semibold">Exchanges </h2>
        <p className=" mb-5">
          If you would like to exchange an item for a different size or color,
          please contact our customer service team. Exchanges follow the same
          return process outlined above.{" "}
        </p>

        <h2 className="font-semibold mt-5">Shipping Costs</h2>
        <p>
          Shipping costs for returned items are generally the responsibility of
          the customer, unless the return is due to an error on our part.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
