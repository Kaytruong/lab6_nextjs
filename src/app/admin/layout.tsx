"use client";
import { ReactNode, useState } from "react"; // Import useState
import { Layout, ConfigProvider } from "antd";
import CustomHeader from "@/app/components/Header";
import Sidebar from "@/app/components/SideBar";

const { Content } = Layout;

interface LayoutProps {
    children: ReactNode;
}

const RootPage = ({ children }: LayoutProps) => {
    const user = {
        username: "KayT",
        fullName: "Trương Khải",
        avatar: null,
        role: "Quản trị viên",
    };

    const [loading, setLoading] = useState(false); // Thêm state loading

    return (
        <div className="flex">
            <ConfigProvider componentSize="large">
                <Layout className="!h-screen">
                    <Sidebar setLoading={setLoading} /> {/* Truyền prop setLoading */}
                    <Layout>
                        <CustomHeader user={user} />
                        <Content
                            style={{
                                margin: "24px 16px",
                                padding: 24,
                                minHeight: 280,
                                background: "#ffffff",
                                borderRadius: 8,
                                position: "relative",
                                overflowY: "auto",
                            }}
                        >
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </div>
    );
};

export default RootPage;