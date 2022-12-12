import React from 'react';
import '../../../stylesheets/dashboard.scss';
import Tabs from './Tabs';

function Dashboard() {

  const tabs = [
    {
      id: 1,
      name: "Neu",
      title: 'Neu',
      text: "Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her cable Sail ho clipper bounty careen galleon bilge rat reef handsomely."
    },
    {
      id: 2,
      name: " Bestellt",
      title: ' Bestellt',
      text: "Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet."
    },
    {
      id: 3,
      name: "Geliefert",
      title: 'Geliefert',
      text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye."
    },
    {
      id: 3,
      name: "Reklamationen",
      title: 'Reklamationen',
      text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye."
    },
    {
      id: 3,
      name: "Abgeschlossen",
      title: 'Abgeschlossen',
      text: "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye."
    }
  ];

  const handleCreateANewOrder = () => {
    window.history.pushState({}, '', './create-a-job');
    window.location.reload();
  }

  return (
    <div className="main_dashboard_container">
      <div className="dashboard_text_cont">
        <div className="dashboard_text fs_30">
          Dashboard
        </div>
        <button className="create_new_order_btn_cont" onClick={handleCreateANewOrder}>Neuen Auftrag erstellen</button>
      </div>
      <div className="dashboard_order_status_cont fs_12">
        <div className="order_in_delivery_cont">
          <div>Aufträge in Lieferung</div>
          <div className="order_in_del_count pdt_10">4</div>
        </div>
        <div className="parts_order_received_cont">
          <div>Teile Bestellung erhalten</div>
          <div className="parts_order_rec_count pdt_10">2</div>
        </div>
        <div className="repair_complete_cont">
          <div>Reparatur abgeschlossen</div>
          <div className="repair_compt_count pdt_10">6</div>
        </div>
        <div className="complaints_cont">
          <div>Reklamationen</div>
          <div className="complain_count pdt_10">1</div>
        </div>
      </div>

      {/* navbar container  */}

      <div className='container'>
        <Tabs tabs={tabs} />
      </div>

    </div>
  )
}

export default Dashboard;
