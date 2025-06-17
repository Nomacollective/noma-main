import React, { useEffect } from "react";

const EmbeddedFormFooter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.jbenquet.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#666666] h-[250px]">
      <iframe
        src="https://link.jbenquet.com/widget/form/SO8up6ErSbXX2VnWL3BX"
        width="100%"
        id="inline-SO8up6ErSbXX2VnWL3BX"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Footer"
        data-height="400"
        data-layout-iframe-id="inline-SO8up6ErSbXX2VnWL3BX"
        data-form-id="SO8up6ErSbXX2VnWL3BX"
        title="Footer"
        style={{ border: "none", borderRadius: "36px", height: "100%" }}
      />
    </div>
  );
};

export default EmbeddedFormFooter;
