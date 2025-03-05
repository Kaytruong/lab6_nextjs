"use client";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    ShoppingCartOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const selectedKey = pathname;

    const handleMenuClick = ({ key }: any) => {
        // Logic xử lý menu click (nếu cần)
    };

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            items={[
                {
                    key: "/admin/products",
                    icon: <AppstoreOutlined />,
                    label: <Link href="/admin/products">Sản phẩm</Link>,
                },
                {
                    key: "/admin/categories",
                    icon: <UnorderedListOutlined />,
                    label: <Link href="/admin/categories">Danh mục</Link>,
                },
                {
                    key: "/admin/cart",
                    icon: <ShoppingCartOutlined />,
                    label: <Link href="/admin/cart">Giỏ hàng</Link>,
                },
            ]}
        />
    );
};

export default Sidebar;