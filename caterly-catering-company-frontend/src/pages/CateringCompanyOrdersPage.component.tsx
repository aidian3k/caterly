import {useGetCateringCompanyOrders} from "../api/react-query/query/orders/orders.query";
import React from "react";
import OrdersList from "../components/features/orders/OrdersList.component";

const CateringCompanyOrdersPage = () => {
    const { data: orders, error, isError, isPending } = useGetCateringCompanyOrders(1);

    return (
        <div className="container p-4">
            <h1 className={"text-xl"}>Zamówienia firmy cateringowej</h1>

            {
                isPending && (
                    <p>Ładowanie...</p>
                )
            }
            {
                orders && (
                    <OrdersList orders={orders}/>
                )
            }
            {
                isError && (
                    <p>Wystapił błąd: {error.message}</p>
                )
            }

        </div>
    )
}

export default CateringCompanyOrdersPage;
