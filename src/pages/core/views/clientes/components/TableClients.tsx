import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Input,
  Button,
} from "@nextui-org/react";
import { IoIosAdd, IoIosRefresh } from "react-icons/io";
export const users = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "5",
    name: "Emily Collins",
    role: "Marketing Manager",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "6",
    name: "Brian Kim",
    role: "Product Manager",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "7",
    name: "Laura Thompson",
    role: "UX Designer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "8",
    name: "Michael Stevens",
    role: "Data Analyst",
    status: "Paused",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "9",
    name: "Sophia Nguyen",
    role: "Quality Assurance",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "10",
    name: "James Wilson",
    role: "Front-end Developer",
    status: "Vacation",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "11",
    name: "Ava Johnson",
    role: "Back-end Developer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "12",
    name: "Isabella Smith",
    role: "Graphic Designer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "13",
    name: "Oliver Brown",
    role: "Content Writer",
    status: "Paused",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "14",
    name: "Lucas Jones",
    role: "Project Manager",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "15",
    name: "Grace Davis",
    role: "HR Manager",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "16",
    name: "Elijah Garcia",
    role: "Network Administrator",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "17",
    name: "Emma Martinez",
    role: "Accountant",
    status: "Vacation",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "18",
    name: "Benjamin Lee",
    role: "Operations Manager",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "19",
    name: "Mia Hernandez",
    role: "Sales Manager",
    status: "Paused",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "20",
    name: "Daniel Lewis",
    role: "DevOps Engineer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "21",
    name: "Amelia Clark",
    role: "Social Media Specialist",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
   
  },
  {
    key: "22",
    name: "Jackson Walker",
    role: "Customer Support",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "23",
    name: "Henry Hall",
    role: "Security Analyst",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "24",
    name: "Charlotte Young",
    role: "PR Specialist",
    status: "Paused",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
  {
    key: "25",
    name: "Liam King",
    role: "Mobile App Developer",
    status: "Active",
    astatus: "Active",
    sstatus: "Active",
    etatus: "Active",
  },
];

export const TableClients = () => {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;
  
    const pages = Math.ceil(users.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return users.slice(start, end);
    }, [page, users]);
    return (
      <div className="space-y-7 animate-fade-up">
        <div className="lg:flex lg:justify-between lg:items-center ">
          <div className="mb-7 lg:mb-0">
            <Input
              type="text"
              label="Buscador"
              placeholder="Introduce para buscar"
              className="w-full lg:w-[500px] sm:w-full shadow-lg"
            />
          </div>
          <div className="flex space-x-3 justify-between">
            <Button
              size="md"
              color="primary"
              className="shadow-lg"
              endContent={<IoIosAdd className="h-7 w-7" />}
            >
              Crear Cliente
            </Button>
            <Button
              size="md"
              variant="ghost"
              color="default"
              className="hover:text-white shadow-lg"
              endContent={<IoIosRefresh className="h-5 w-5" />}
            >
              Actualizar
            </Button>
          </div>
        </div>
        <div>
          <Table
            className=" shadow-lg"
            bottomContent={
              <div className="flex w-full my-3 justify-end lg:ml-0 ml-16">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  size="lg"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-full",
            }}
          >
            <TableHeader>
              <TableColumn key="name">NAME</TableColumn>
              <TableColumn key="role">ROLE</TableColumn>
              <TableColumn key="status">STATUS</TableColumn>
              <TableColumn key="status">STATUS</TableColumn>
              <TableColumn key="status">STATUS</TableColumn>
              <TableColumn key="status">STATUS</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.name}>
                  {(columnKey) => (
                    <TableCell className="dark:text-white">{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
}
