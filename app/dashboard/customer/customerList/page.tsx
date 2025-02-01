import { customers } from "@/app/lib/placeholder-data"

export default function Page() {
    const customerList = customers.map(customer => <li>{customer.name}</li>)
    console.log(customerList)
    return (
        <>
            <h1>Here are the list of customers</h1>
            <div>
                <ul>
                    {customerList}
                </ul>
            </div>
        </>
    )
}