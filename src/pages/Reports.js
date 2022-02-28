
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';


const Reports = () => {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Instructors', icon: 'pi pi-fw pi-users'},
        {label: 'Reports', icon: 'pi pi-fw pi-file'},
        // {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
      
        <div>
            <div className="card">
                <h1>Reports</h1>
            </div>
        </div>
        
    );
}
export default Reports                 