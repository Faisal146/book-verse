import { useState , useEffect } from "react";
import { getItemsReadList } from "./utility/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { useLoaderData } from "react-router-dom";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];




const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {

   const books = useLoaderData();
   const [data ,setData] = useState([]);

 
   

  useEffect(() => {
    const storedItems = getItemsReadList();

    if (storedItems.length > 0) {
      const readItems = books.filter((book) =>
        storedItems.includes(book.bookId)
      );

      const newData = [];

      readItems.map(item => {
      //  console.log(item)
        const obj = {
            name: item.bookName,
            uv: item.totalPages
        }

        console.log(obj)
      //  const newdata =[ ...data, obj]
        newData.push(obj)
       
       
      })

      console.log(newData)

      setData(newData)


      
    }
  }, []);

    
const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 1000,
      
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  console.log(data)





  return (
    <div>
      <h1 className="mt-8 mb-6 text-3xl font-bold">pages to read</h1>

      <div className="chart">
        <BarChart className="mx-auto"
          width={800}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="black"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
