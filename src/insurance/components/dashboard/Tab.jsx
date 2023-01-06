import React from 'react';
import Timelines from '../timelines/Timelines';
import InvoiceDashboardTable from './InvoiceDashboardTable';
import OrderSummaryBox from './OrderSummaryBox';
import PartsOrderOverviewTab from './PartsOrderOverviewTab';

export default function Tab(props) {
  const {  item } = props.tab;
  const { activeTabId } = props;
  
  return ( 
    <div>
            {/* <h3>{props.tab.title}</h3> */}
      {/* <p>{props.tab.table.name}</p> */}
      { activeTabId === 1 ? 
      <>
      <OrderSummaryBox />
      <div className='dashboard_table_head mrgt_30'>
            <div className='w_5'></div>
            <div className='w_15'>Bestellnummer</div>
            <div className='w_15'>Fallnummer</div>
            <div className='w_17'>Werkstatt</div>
            <div className='w_25'>Teilehändler</div>
            <div className='w_15'>Status</div>
            <div className='w_17'>Prozess</div>
            <div className='w_15'>Datum</div>
          </div>
          {item.map(tableBodyItem=>(
            <InvoiceDashboardTable
             orderNo= {tableBodyItem.orderNo}
             caseNo= {tableBodyItem.caseNo}
             workshop= {tableBodyItem.workshop}
             partDealer= {tableBodyItem.partDealer}
             currentStatus= {tableBodyItem.currentStatus}
             process= {tableBodyItem.process}
             date= {tableBodyItem.date}
             title= {tableBodyItem.title}
          />
          ))}</> : ''}
          { activeTabId === 2 ? <Timelines /> : '' }
          { activeTabId === 3 ? <PartsOrderOverviewTab /> : '' }
    </div>
  );
}
