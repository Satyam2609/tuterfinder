"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TutorDetailsData() {
  const [data, setData] = useState({
    subjects: "",
    location: "",
    description: "",

    qualifications: Array(3).fill({ title: "", description: "", image: null }),
    achievements: Array(3).fill({ title: "", description: "", image: null }),
  });
  const router = useRouter()

  const handleChange = (e, index, type) => {
    const { name, value, files } = e.target;

    if (type) {
      const updated = [...data[type]];
      updated[index] = {
        ...updated[index],
        [name]: files ? files[0] : value,
      };
      setData({ ...data, [type]: updated });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("subjects", data.subjects);
    fd.append("location", data.location);
    fd.append("description", data.description);

    fd.append(
      "qualificationData",
      JSON.stringify(
        data.qualifications.map(({ title, description }) => ({
          title,
          description,
        }))
      )
    );

    fd.append(
      "achievementData",
      JSON.stringify(
        data.achievements.map(({ title, description }) => ({
          title,
          description,
        }))
      )
    );

    data.qualifications.forEach((q) =>
      fd.append("qualificationImages", q.image)
    );
    data.achievements.forEach((a) =>
      fd.append("achievementImages", a.image)
    );

    await axios.post("http://localhost:4000/api/createTutor", fd, {
      withCredentials: true,
    });

    router.push("/")

    alert("Profile Created");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-zinc-900 text-white py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 space-y-12"
      >
        <h1 className="text-3xl font-bold text-center">
          Create Tutor Profile
        </h1>

        {/* BASIC INFO */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="subjects"
            placeholder="Subject (e.g. Math, Physics)"
            className="input"
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location"
            className="input"
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Tell students about yourself"
          className="input h-32"
          onChange={handleChange}
        />

        {/* QUALIFICATIONS */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Qualifications</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.qualifications.map((_, i) => (
              <div
                key={i}
                className="bg-white/5 p-5 rounded-xl space-y-4 border border-white/10"
              >
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    handleChange(e, i, "qualifications")
                  }
                  className="file"
                />
                <input
                  name="title"
                  placeholder="Marks / Degree"
                  className="input"
                  onChange={(e) =>
                    handleChange(e, i, "qualifications")
                  }
                />
                <input
                  name="description"
                  placeholder="Board / College"
                  className="input"
                  onChange={(e) =>
                    handleChange(e, i, "qualifications")
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Classroom / Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.achievements.map((_, i) => (
              <div
                key={i}
                className="bg-white/5 p-5 rounded-xl space-y-4 border border-white/10"
              >
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    handleChange(e, i, "achievements")
                  }
                  className="file"
                />
                <input
                  name="title"
                  placeholder="Title"
                  className="input"
                  onChange={(e) =>
                    handleChange(e, i, "achievements")
                  }
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  className="input h-24"
                  onChange={(e) =>
                    handleChange(e, i, "achievements")
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-4 rounded-xl bg-amber-500 text-black font-bold text-lg hover:scale-[1.02] transition">
          Save Profile
        </button>
      </form>

      {/* Tailwind helpers */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          outline: none;
        }
        .input:focus {
          border-color: #f59e0b;
        }
        .file {
          width: 100%;
          color: #aaa;
        }
      `}</style>
    </section>
  );
}
