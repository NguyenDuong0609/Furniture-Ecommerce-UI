"use client";

export default function EmailReceiptPage() {
  return (
    <>
      <style jsx global>{`
        body > div > nav,
        body > div > footer {
          display: none !important;
        }
      `}</style>
      <div style={{ backgroundColor: '#dddddd', padding: '50px 0' }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}>
        <tbody>
          <tr>
            <td height="25"></td>
          </tr>

          {/* Header */}
          <tr>
            <td>
              <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '50%' }}>
                      <img src="/mobel/assets/images/logo-dark.png" alt="" style={{ display: 'block' }} />
                    </td>
                    <td style={{ width: '50%', textAlign: 'right' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#484848' }}>
                        Invoice
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal', textTransform: 'uppercase', margin: '0', color: '#484848' }}>
                        WEB8974635
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Divider */}
          <tr>
            <td>
              <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                <tbody>
                  <tr>
                    <td height="20"></td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: '1px solid #f8f8f8', height: '1px' }}></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Intro text */}
          <tr>
            <td style={{ background: '#f7f7f7', padding: '35px 0', borderTop: '1px solid #eeeeee' }}>
              <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 'bold', textTransform: 'none', marginTop: '0', marginBottom: '10px', color: '#464951', textAlign: 'left' }}>
                        Your order is completed!!
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '20px', color: '#464951', textAlign: 'left' }}>
                        Dear costumer, your payment for your online order placed on Mobel Furniture Store order and has been approved order reference number: <strong>WEB8974635</strong>.
                        Please note that we will appear on your card statement. To get further payment support for your purchase, please sign-up
                        using your email address at
                        <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', color: '#3a3d45', textDecoration: 'underline' }}>
                          Mobel Furniture Store
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* User info */}
          <tr>
            <td style={{ background: '#ffffff', padding: '35px 0', borderTop: '1px solid #eeeeee', borderBottom: '1px solid #eeeeee' }}>
              <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '50%', verticalAlign: 'top' }}>
                      <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                        <tbody>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Shipping info</strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Name:</strong> John Doe
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Phone:</strong> +122 523 352
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Email:</strong> johndoe@company.com
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Address:</strong> 795 Folsom Ave, Suite 600
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>City:</strong> San Francisco, California
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Zip:</strong> 94107
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ width: '50%', verticalAlign: 'top' }}>
                      <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                        <tbody>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '22px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Order details</strong>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Order no.:</strong> 52522-63259226
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Order date :</strong> 06/30/2017
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Transaction ID :</strong> 2265996
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Transaction time :</strong> 06/30/2017 at 00:59
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Cart details:</strong> **** **** **** 5446
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ paddingTop: '5px', paddingBottom: '5px', borderBottom: '1px solid #f5f5f5' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Invoice total:</strong> $ 1259,00
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Product table */}
          <tr>
            <td style={{ backgroundColor: '#ffffff' }}>
              <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                <tbody>
                  {/* Header */}
                  <tr>
                    <td style={{ width: '180px', verticalAlign: 'middle', backgroundColor: '#f7f7f7', padding: '25px' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                        Product
                      </p>
                    </td>
                    <td style={{ verticalAlign: 'middle', backgroundColor: '#f7f7f7', padding: '25px' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                        Quantity
                      </p>
                    </td>
                    <td style={{ verticalAlign: 'middle', textAlign: 'right', backgroundColor: '#f7f7f7', padding: '25px' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'right' }}>
                        Price
                      </p>
                    </td>
                  </tr>

                  {/* Product 1 */}
                  <tr>
                    <td style={{ width: '200px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <img src="/mobel/assets/images/product-1.png" alt="" width="180" style={{ display: 'block' }} />
                    </td>
                    <td style={{ width: '300px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                        Green Corner
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'left' }}>
                        Category item
                      </p>
                    </td>
                    <td style={{ width: '100px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'right' }}>
                        $ 1.998
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'right', textDecoration: 'line-through' }}>
                        $ 2.666
                      </p>
                    </td>
                  </tr>

                  {/* Product 2 */}
                  <tr>
                    <td style={{ width: '200px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <img src="/mobel/assets/images/product-2.png" alt="" width="180" style={{ display: 'block' }} />
                    </td>
                    <td style={{ width: '300px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                        Laura
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'left' }}>
                        Category item
                      </p>
                    </td>
                    <td style={{ width: '100px', verticalAlign: 'middle', padding: '25px', borderBottom: '1px solid #eeeeee' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'right' }}>
                        $ 1.998
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'right', textDecoration: 'line-through' }}>
                        $ 2.666
                      </p>
                    </td>
                  </tr>

                  {/* Product 3 */}
                  <tr>
                    <td style={{ width: '200px', verticalAlign: 'middle', padding: '25px' }}>
                      <img src="/mobel/assets/images/product-3.png" alt="" width="180" style={{ display: 'block' }} />
                    </td>
                    <td style={{ width: '300px', verticalAlign: 'middle', padding: '25px' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'left' }}>
                        Aurora
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'left' }}>
                        Category item
                      </p>
                    </td>
                    <td style={{ width: '100px', verticalAlign: 'middle', padding: '25px' }}>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#3a3d45', textAlign: 'right' }}>
                        $ 1.998
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', margin: '0', color: '#60636b', textAlign: 'right', textDecoration: 'line-through' }}>
                        $ 2.666
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Pricing */}
          <tr>
            <td style={{ backgroundColor: '#f7f7f7', color: '#3a3d45', padding: '25px 0' }}>
              <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td style={{ paddingBottom: '20px' }}>
                      <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                        <tbody>
                          <tr>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Discount 15%</strong>
                              </p>
                            </td>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'right' }}>
                                $ 159,00
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Shipping</strong>
                              </p>
                            </td>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'right' }}>
                                $ 30,00
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>VAT / TAX</strong>
                              </p>
                            </td>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '3px 0', color: '#3a3d45', textAlign: 'right' }}>
                                $ 59,00
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingTop: '20px', borderTop: '1px solid #dddddd' }}>
                      <table cellPadding="0" cellSpacing="0" width="100%" align="center">
                        <tbody>
                          <tr>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '28px', fontWeight: 'bold', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '0', color: '#3a3d45', textAlign: 'left' }}>
                                <strong>Total price</strong>
                              </p>
                            </td>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '28px', fontWeight: 'bold', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '0', color: '#3a3d45', textAlign: 'right' }}>
                                $ 1259,00
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '0', color: '#a6acbb', textAlign: 'left' }}>
                                <strong>You save</strong>
                              </p>
                            </td>
                            <td style={{ width: '50%', verticalAlign: 'top' }}>
                              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '0', color: '#a6acbb', textAlign: 'right' }}>
                                $ 159,00
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Payment methods */}
          <tr>
            <td style={{ paddingTop: '20px' }}>
              <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
                <tbody>
                  <tr>
                    <td>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '20px', padding: '0', color: '#484848', textAlign: 'center' }}>
                        Payments should be made within 30 days with one of the options below, or you can enter any note here if necessary, you have much space:
                      </p>
                      <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', padding: '0', color: '#484848', textAlign: 'center' }}>
                        <strong>Payment Methods:</strong> Cheque, PayPal, WesternUnion <br />
                        <strong>We accept:</strong> MasterCard, Visa, AmericanExpress <br />
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td height="25"></td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <table cellPadding="0" cellSpacing="0" width="560" align="center" style={{ margin: '0 auto' }}>
        <tbody>
          <tr>
            <td style={{ padding: '25px 0' }}>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold', textTransform: 'none', marginTop: '0', marginBottom: '20px', padding: '0', color: '#3a3d45', textAlign: 'center' }}>
                THANK YOU VERY MUCH FOR CHOOSING OUR PRODUCT
              </p>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '20px', padding: '0', color: '#aaaaaa', textAlign: 'center' }}>
                You are receiving this because you are a current subscriber, <br />or have bought from our website.
              </p>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '20px', padding: '0', color: '#3a3d45', textAlign: 'center' }}>
                <a style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', color: '#3a3d45', textDecoration: 'underline' }} href="#">Subscribe</a> |
                <a style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', color: '#3a3d45', textDecoration: 'underline' }} href="#">Unsubscribe</a> |
                <a style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'normal', textTransform: 'none', marginTop: '0', marginBottom: '0', color: '#3a3d45', textDecoration: 'underline' }} href="#">Forward</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
