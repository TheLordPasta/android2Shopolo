import React, { useEffect, useState } from "react";
import { Card, Flex, Group, Image, Text, Title, useMantineColorScheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderHistory = () => {
    const { colorScheme } = useMantineColorScheme();
    const navigate = useNavigate();
    const [orders, setOrders] = useState();
    const dark = colorScheme === "dark";

    useEffect(() => {
        if (localStorage.getItem('authToken'))
            fetchOrders();
        else
            navigate('/');
    }, []);

    const fetchOrders = async () => {
        const res = await axios.post('http://localhost:5000/fetchOrders', { token: localStorage.getItem('authToken') });
        setOrders(res.data.data);
    };

    return orders ? (
        <Flex justify='center'>
            <Card
                padding="lg"
                radius="md"
                shadow="sm"
                style={{
                    backgroundColor: dark ? "#1A1B1E" : "#FFF",
                    color: dark ? "#FFF" : "#000",
                    maxWidth: "600px",
                    width: "100%",
                }}
            >
                <Title order={2} align="center" style={{ marginBottom: "20px" }}>
                    Your Order History
                </Title>
                {orders.length === 0 ? (
                    <Text align="center">No orders found</Text>
                ) : (
                    <Group direction="column" spacing="lg">
                        {orders.map((order) => (
                            <Card key={order._id} withBorder shadow="md" radius="md">
                                <Group direction="column" spacing="xs">
                                    <Title order={3}>Order Date: {new Date(order.orderDate).toLocaleString()}</Title>
                                    <Group direction="column" spacing="sm">
                                        {order.products.map((product) => (
                                            <Group key={product._id} spacing="md" align="center" noWrap>
                                                <Image src={product.image} alt={product.name} width={50} height={50} radius="md" />
                                                <Text>
                                                    {product.name} - ${product.price}
                                                </Text>
                                            </Group>
                                        ))}
                                    </Group>
                                    <Text>Total Price: ${order.totalPrice}</Text>
                                </Group>
                            </Card>
                        ))}
                    </Group>
                )}
            </Card>
        </Flex>
    ) : null;
};

export default OrderHistory;
