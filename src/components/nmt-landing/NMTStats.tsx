import Count from "../common/Count";

interface DataType {
   id: number;
   count: number;
   count_text: string;
   text: string;
}

// Placeholder data - to be updated when actual statistics are available
const nmt_stats_data: DataType[] = [
   {
      id: 1,
      count: 500,
      count_text: "+",
      text: "Успішних учнів",
   },
   {
      id: 2,
      count: 25,
      count_text: "+",
      text: "Балів приросту",
   },
   {
      id: 3,
      count: 95,
      count_text: "%",
      text: "Вступили до ВНЗ",
   },
   {
      id: 4,
      count: 4,
      count_text: ".8",
      text: "Середня оцінка",
   },
];

const NMTStats = () => {
   return (
      <section className="fact__area" id="stats">
         <div className="container" style={{padding: "30px 0 60px 0"}}>
            <div className="fact__inner-wrap" style={{
               marginLeft: "15px",
               marginRight: "15px"
            }}>
               <div className="row">
                  {nmt_stats_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-6">
                        <div className="fact__item" style={{
                           paddingLeft: "10px",
                           paddingRight: "10px"
                        }}>
                           <h2 className="count"><Count number={item.count} />{item.count_text}</h2>
                           <p>{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default NMTStats;
