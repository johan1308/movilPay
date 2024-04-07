import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { navigation } from "../../data/menu";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";


export const BreadCrumbCore = () => {
    const param = useParams();
    const ruta: any = param["*"];

    const getCurrentRoute:any = (pathname:any, items:any) => {
        for (const item of items) {
            const fullPath = item.path;
            const isCurrent = pathname.startsWith(fullPath);
            if (isCurrent) {
                if (item.children && item.children.length > 0) {
                    return getCurrentRoute(pathname, item.children);
                } else {
                    return item;
                }
            }
        }
        return null;
    };

    const getTitle = useMemo(() => {
        return getCurrentRoute(window.location.pathname, navigation);
    }, [ruta]);
    console.log(getTitle);

    return (
        <div className="mb-10">
            <Breadcrumbs size="lg">
                <BreadcrumbItem >Home</BreadcrumbItem>
                <BreadcrumbItem >Music</BreadcrumbItem>
                <BreadcrumbItem >Artist</BreadcrumbItem>
                <BreadcrumbItem >Album</BreadcrumbItem>
                <BreadcrumbItem >Song</BreadcrumbItem>
            </Breadcrumbs>
        </div>
    )
}
