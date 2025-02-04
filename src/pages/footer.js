import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-grid">
      <div className="w-layout-grid footer-left-column">
        <div className="footer-column">
          <div className="margin-bottom-99">
            <div className="text-block-3">
              <strong>
                Project Inquiries:<br />‍<br />‍
              </strong>
              Project Coordinator: <a href="mailto:dhaval.patel@algomau.ca" className="footer-link">Dhaval Patel</a><br />
              Project Leader: <a href="mailto:ajmery.sultana@algomau.ca" className="footer-link">Dr. Ajmery Sultana</a>
            </div>
          </div>
        </div>
      </div>
      
      <div id="w-node-_3152d269-83af-f345-cc14-06df7564086e-cf9aae39" className="footer-right-column-2">
        <div className="footer-column">
          <div className="div-block-9">
            <div className="text-block-6">
              <strong className="bold-text-2">Need Mental Health Help?<br />‍</strong>‍
            </div>
            <div className="div-block-4">
              <img
                src="https://cdn.prod.website-files.com/674912352bcd45d433111393/675886c7b4995baf8777e30c_website.png"
                loading="eager"
                sizes="20px"
                srcSet="https://cdn.prod.website-files.com/674912352bcd45d433111393/675886c7b4995baf8777e30c_website-p-500.png 500w, https://cdn.prod.website-files.com/674912352bcd45d433111393/675886c7b4995baf8777e30c_website.png 512w"
                alt="Mental Health Help"
                className="icon-small"
              />
              <div className="footer-link">
                <a href="https://algomau.ca/wellness/" target="_blank" className="footer-link">
                  https://algomau.ca/wellness/
                </a><br />
              </div>
            </div>
            <div className="div-block-4">
              <img
                src="https://cdn.prod.website-files.com/674912352bcd45d433111393/6750a01e762b78d8242992bf_envelope.png"
               
                alt="Email"
                className="icon-small"
              />
              <div className="footer-link">
                <a href="mailto:wellness@algomau.ca" target="_blank" className="footer-link">
                  wellness@algomau.ca
                </a><br />
              </div>
            </div>
            <div className="div-block-4">
              <img
                src="https://cdn.prod.website-files.com/674912352bcd45d433111393/675888da63b1031d77eff93d_telephone.png"
                loading="eager"
                alt="Telephone"
                className="icon-small"
              />
              <div className="text-block-8">In an emergency, call 9-1-1.</div>
            </div>
          </div>
        </div>
      </div>

      <div id="w-node-_69cc50ef-effd-1ace-a881-029561592324-cf9aae39" className="footer-right-column-2">
        <div className="footer-form-wrapper">
          <div className="margin-bottom-99">
            <div className="detail text-color-gray-400">
              <div>
                <div className="text-block-3">
                  1520 Queen Street East<br />Sault Ste. Marie, Ontario<br />Canada P6A 2G4<br /><br />
                  24 Queen St. East<br />(A-101 Welcome Centre)<br />Brampton, Ontario<br />Canada L6V 1A3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal-links">
          <div className="text-block-5">Copyright © 2024 Algoma University. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
