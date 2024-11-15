"use client";
import React from "react";
import { MenuIcon } from "lucide-react";
import SidebarOption from "@/components/SidebarOption"; // Assuming SidebarOption exists
import { useDocuments } from "@/lib/useDocument"; // Importing our custom hook
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import NewDocumentButton from "./NewDocumentButton";

const Sidebar = () => {
    const { owner, editor } = useDocuments(); // Using our custom hook to get grouped data

    const menuOptions = (
        <>
            <NewDocumentButton />

            {/* My Documents */}
            <div className="flex py-4 flex-col space-y-4 md:max-w-36">
                {owner.length === 0 ? (
                    <h2 className="text-gray-500 font-semibold text-sm">
                        No Documents found
                    </h2>
                ) : (
                    <>
                        <h2 className="text-gray-500 font-semibold text-sm">
                            My Documents
                        </h2>
                        {owner.map((doc) => (
                            <SidebarOption
                                key={doc.id}
                                id={doc.id}
                                href={`/doc/${doc.id}`}
                            />
                        ))}
                    </>
                )}
            </div>

            {/* Shared with Me */}
            {editor.length > 0 && (
                <>
                    <h2 className="text-gray-500 font-semibold text-sm">
                        Shared with Me
                    </h2>
                    {editor.map((doc) => (
                        <SidebarOption
                            key={doc.id}
                            id={doc.id}
                            href={`/doc/${doc.id}`}
                        />
                    ))}
                </>
            )}
        </>
    );

    return (
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon
                            className="p-2 hover:opacity-30 rounded-lg"
                            size={40}
                        />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>{menuOptions}</div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:inline">{menuOptions}</div>
        </div>
    );
};

export default Sidebar;