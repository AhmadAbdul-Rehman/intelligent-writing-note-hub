"use client";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const Breadcrumbs = () => {
    const path = usePathname();
    const segments = path.split("/").filter(Boolean); // Filter out empty segments

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href={"/"}>
                        <BreadcrumbLink>Home</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const isLast = index === segments.length - 1;

                    return (
                        <Fragment key={segment}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                                ) : (
                                    <Link href={href}>
                                        <BreadcrumbLink>
                                            {segment}
                                        </BreadcrumbLink>
                                    </Link>
                                )}
                            </BreadcrumbItem>
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default Breadcrumbs;
