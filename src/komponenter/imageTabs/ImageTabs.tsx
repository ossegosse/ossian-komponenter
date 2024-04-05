import Tabs from "../tabs/Tabs";
import "./ImageTabs.scss";

const ImageTabs = () => {
  const tabs = [
    {
      label: "Flik 1",
      content: (
        <div>
          <img src="https://rb.gy/mi13km" />{" "}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            delectus hic possimus dolor quibusdam! Nihil ex perspiciatis nemo.
            Eum quo soluta similique iure eaque? Saepe reprehenderit reiciendis
            quas blanditiis accusamus.
          </p>
        </div>
      ),
    },
    {
        label: "Flik 2",
        content: (
          <div>
            <img src="https://rb.gy/fu31fh" />{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
              delectus hic possimus dolor quibusdam! Nihil ex perspiciatis nemo.
              Eum quo soluta similique iure eaque? Saepe reprehenderit reiciendis
              quas blanditiis accusamus.
            </p>
          </div>
        ),
      },
      {
        label: "Flik 3",
        content: (
          <div>
            <img src="https://rb.gy/2bovfl" />{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
              delectus hic possimus dolor quibusdam! Nihil ex perspiciatis nemo.
              Eum quo soluta similique iure eaque? Saepe reprehenderit reiciendis
              quas blanditiis accusamus.
            </p>
          </div>
        ),
      },
  ];

  return (
    <div className="ImageTabs">
      <h1>Tabs</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default ImageTabs;
