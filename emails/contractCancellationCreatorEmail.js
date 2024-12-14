export const contractCancellationCreatorEmail = (
  project_name,
  user_name,
  client_name,
  dispute_url,
  support_email
) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return `<!doctype html>
<html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title>Contract Cancellation Creator</title>
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 13px 0;
    }

  </style>
  <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
  <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    @import url(https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap);

  </style>
  <!--<![endif]-->
  <style type="text/css">
    @media only screen and (min-width:480px) {
      .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    }

  </style>
  <style media="screen and (min-width:480px)">
    .moz-text-html .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
    }

  </style>
  <style type="text/css">
    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile {
        width: 100% !important;
      }

      td.mj-full-width-mobile {
        width: auto !important;
      }
    }

  </style>
</head>

<body style="word-spacing:normal;background-color:#EFF0FF;">
  <div style="background-color:#EFF0FF;" lang="und" dir="auto">
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:48px 16px 0 16px;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:568px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="background-color:#3B42C4;border-radius:8px 8px 0px 0px;vertical-align:top;padding:32px 0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:100px;">
                                        <img alt="Locka Logo" src="https://lockapublicbucket.s3.eu-north-1.amazonaws.com/Locka-email-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" height="auto" />
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
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:568px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="background-color:#FFFFFF;border-radius:0px 0px 8px 8px;vertical-align:top;padding:48px 0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" style="font-size:0px;padding:0 24px 48px 24px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:30px;font-weight:bold;line-height:40px;text-align:center;color:#000000;">Important Update: Contract Cancellation for ${project_name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;">Hi <b> ${user_name} </b></div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;">We wanted to inform you that your contract with <b> ${project_name} </b> has been cancelled by the project owner, <b> ${client_name}. </b></div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;">Here’s what this means:</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:30px;text-align:left;color:#333333;">
                                  <ul style="padding-left: 20px; margin: 0">
                                    <li>You are no longer required to work on this project.</li>
                                    <li> If you think the cancellation is unfair or there’s an issue, you can file a dispute within <b> 5 working days. </b>
                                    </li>
                                    <li> Our team will carefully review the project details and determine if payment is due for completed work. </li>
                                    <li> If no dispute is filed, the contract will be fully cancelled, and the project owner will receive a refund. </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:30px 16px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="#3B42C4" role="presentation" style="border:none;border-radius:8px;cursor:auto;height:30px;mso-padding-alt:10px 70px;background:#3B42C4;" valign="middle">
                                        <a href="${dispute_url}" style="display:inline-block;background:#3B42C4;color:#ffffff;font-family:Host Grotesk;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 70px;mso-padding-alt:0px;border-radius:8px;" target="_blank"> File A Dispute </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;">While this project has come to an end, we’re confident new opportunities are on the horizon for you. If you have any questions or need guidance, our team is always here to support you.</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:0px;padding:30px 16px;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                                  <tbody>
                                    <tr>
                                      <td align="center" bgcolor="#3B42C4" role="presentation" style="border:none;border-radius:8px;cursor:auto;height:30px;mso-padding-alt:10px 70px;background:#3B42C4;" valign="middle">
                                        <a href="mailto:${support_email}" style="display:inline-block;background:#3B42C4;color:#ffffff;font-family:Host Grotesk;font-size:16px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 70px;mso-padding-alt:0px;border-radius:8px;" target="_blank"> Contact Support </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;">Warm regards,</div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                <div style="font-family:Host Grotesk;font-size:16px;line-height:22.4px;text-align:left;color:#000000;"><b> The Locka Team</b></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
    <!-- FOOTER==================================== -->
    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                          <tbody>
                            <tr>
                              <td style="padding:0px 20px;vertical-align:middle;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:40px;">
                                  <tbody>
                                    <tr>
                                      <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                        <a href="https://www.instagram.com/locka.app" target="_blank">
                                          <img alt="instaram-logo" height="40" src="https://lockapublicbucket.s3.eu-north-1.amazonaws.com/instagram.png" style="border-radius:3px;display:block;" width="40" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso | IE]></td><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                          <tbody>
                            <tr>
                              <td style="padding:0px 20px;vertical-align:middle;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:40px;">
                                  <tbody>
                                    <tr>
                                      <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                        <a href="https://www.x.com/lockaapp" target="_blank">
                                          <img alt="twitterX-logo" height="40" src="https://lockapublicbucket.s3.eu-north-1.amazonaws.com/twitterX.png" style="border-radius:3px;display:block;" width="40" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso | IE]></td><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                          <tbody>
                            <tr>
                              <td style="padding:0px 20px;vertical-align:middle;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:40px;">
                                  <tbody>
                                    <tr>
                                      <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                        <a href="https://www.facebook.com/getlocka" target="_blank">
                                          <img alt="" height="40" src="https://lockapublicbucket.s3.eu-north-1.amazonaws.com/facebook.png" style="border-radius:3px;display:block;" width="40" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso | IE]></td><td><![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                          <tbody>
                            <tr>
                              <td style="padding:0px 20px;vertical-align:middle;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:40px;">
                                  <tbody>
                                    <tr>
                                      <td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
                                        <a href="https://www.linkedin.com/company/lockaapp" target="_blank">
                                          <img alt="linkedin-logo" height="40" src="https://lockapublicbucket.s3.eu-north-1.amazonaws.com/linkedin.png" style="border-radius:3px;display:block;" width="40" />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="margin:0px auto;max-width:600px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Host Grotesk;font-size:16px;line-height:1;text-align:center;color:#000000;"><a href="https://locka.app/" target="_blank" style="color: #3b42c4; font-weight: bold; text-decoration: none"> www.locka.app </a></div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Host Grotesk;font-size:13px;line-height:22.4px;text-align:center;color:#999999;">Abuja FCT, Nigeria</div>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:0px 0;word-break:break-word;">
                        <p style="border-top:solid 1px #ECECEC;font-size:1px;margin:0px auto;width:100%;">
                        </p>
                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #ECECEC;font-size:1px;margin:0px auto;width:600px;" role="presentation" width="600px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <div style="font-family:Host Grotesk;font-size:13px;line-height:1;text-align:center;color:#999999;">Copyright © ${year}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--[if mso | IE]></td></tr></table><![endif]-->
  </div>
</body>

</html>

`;
};
