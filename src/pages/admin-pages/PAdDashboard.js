import React from "react";
import AdDashboard from '../../../src/Components/AdminComponents/AdDashboard';
import InHeader from '../../../src/Components/InstructorComponents/InHeader';
import AdHeader from "../../Components/AdminComponents/AdHeader";
function PAdDashboard() {
  return (
    <div>
      <AdHeader/>
      <AdDashboard/>
    </div>
  );
}

export default PAdDashboard;