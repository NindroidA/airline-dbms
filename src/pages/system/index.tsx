import TableComponent from "components/table";

export default function System() {
    return (
        <div>
            <p>Test Table</p>
            <div>
            <TableComponent
                headers={[
                    { key: 'flight_id', label: 'Flight No.' },
                    { key: 'depart_id', label: 'To' },
                    { key: 'status', label: 'Status' },
                    { key: 'scheduled', label: 'Sched.' },
                    { key: 'update', label: 'Update'},
                    { key: 'gate', label: 'Gate'},
                ]}
                rows={[
                    { 
                    flight_id: '123',
                    depart_id: 'KIAH',
                    status: 'In Air',
                    scheduled: '6:00 AM',
                    update: '6:05 AM',
                    gate: '5'
                    },
                    { 
                    flight_id: '1267',
                    depart_id: 'KLFT',
                    status: 'Boarding',
                    scheduled: '12:05 PM',
                    update: '11:45 PM',
                    gate: 'D6'
                    },
                    // ... more rows
                ]}
            />
            </div>
        </div>
    );
}