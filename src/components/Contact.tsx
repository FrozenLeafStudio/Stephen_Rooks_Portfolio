import { useState } from "react";

type Props = {};
export default function Contact({}: Props) {
  const [input, setInput] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send outreach</button>
      </form>
    </div>
  );
}
