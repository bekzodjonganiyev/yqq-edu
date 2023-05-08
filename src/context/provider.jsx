import { useState } from "react";

import { UsersContext, ScrollContext } from "./context";

export let newsActions = null;
export let smallActions = null;
export let userActions = null;
export const baseUrl = "https://new-tkti-back.herokuapp.com";
export const imgPrefix = "https://new-tkti-back.herokuapp.com/"

export const UsersProvider = ({ children }) => {
  // Scroll value handled here
  const [scrollValue, setScrollValue] = useState(0);

  // Fetching results here
  const [news, setNews] = useState([]);
  const [newById, setNewById] = useState({});
  const [vacancys, setVacancys] = useState([]);
  const [vacancyById, setVacancyById] = useState({});
  const [users, setUsers] = useState([]);
  const [media, setMedia] = useState([]);
  const [banner, setBanner] = useState([]);
  const [photos, setPhotos] = useState([]);

  // Action states for UI
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const config = {
    "Content-type": "application/json",
    token: localStorage.getItem("token"),
  };

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
    getMedia: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.success) {
          setMedia(res.data);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
          setMedia([]);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    addMedia: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      data.then((res) => {
        if (res.status === 200) {
          setAlert(true);
          setIsLoading(false);
          setError(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    editMedia: () => {},

    deleteMedia: async (id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/media/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.success) {
          const filteredNews = media.filter((item) => item._id !== id);
          setMedia(filteredNews);
          setIsLoading(false);
          setAlert(true);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    // About Banner
    getBanner: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.success) {
          setBanner(res.data);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
          setBanner([]);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    addBanner: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      data.then((res) => {
        if (res.status === 200) {
          setError(false);
          setAlert(true);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    editBanner: () => {},

    deleteBanner: async (id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/banner/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.status === 200) {
          const filteredNews = banner.filter((item) => item._id !== id);
          setBanner(filteredNews);
          setIsLoading(false);
          setAlert(true);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
    // About Banner

    // About Photo News
    getPhotos: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.success) {
          setPhotos(res.data);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
          setApplication([]);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    addApplication: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      data.then((res) => {
        if (res.status === 200) {
          setError(false);
          setAlert(true);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    editApplication: async (id, body) => {
      console.log(body);
      setIsLoading(true);
      const res = (
        await fetch(`${baseUrl}/application/${id}`, {
          method: "PUT",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      // const res = await fetch(`${baseUrl}/application/${id}`, {method: "PUT", body, headers: {token: localStorage.getItem("token")}})
      res.then((res) => {
        if (res.success) {
          setTimeout(() => {
            setIsLoading(false);
            setModalClose(true);
          }, 2000);
        } else {
          setError(true);
        }
      });
    },

    deleteApplication: async (id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/photo/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.success) {
          const filteredNews = application.filter((item) => item._id !== id);
          setApplication(filteredNews);
          setIsLoading(false);
          setAlert(true);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
    // About Photo News
  };

  newsActions = {
    getNews: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.success) {
          if (url === "news/all") {
            setNews(res.data);
          } else {
            setVacancys(res.data);
          }
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
          setNews([]);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    getNewById: async (url, id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}/${id}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.success) {
          if (url === "news") {
            setNewById(res.data);
          } else {
            setVacancyById(res.data);
          }
          setIsLoading(false);
        } else {
          setError(true);
          setNewById({});
          setVacancyById({});
          setIsLoading(false);
        }
      });
    },

    addNews: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      data.then((res) => {
        if (res.status === 200) {
          setAlert(true);
          setIsLoading(false);
          setError(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    editNews: async (id, body) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${id}`, {
          method: "PUT",
          body,
          headers: { token: localStorage.getItem("token") },
        })
      ).json();
      data.then((res) => {
        if (res.success) {
          setTimeout(() => {
            setIsLoading(false);
            setModalClose(true);
          }, 2000);
        }
      });
      setTimeout(() => {
        setModalClose(false);
      }, 7000);
    },

    deleteNew: async (id, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      if (url === "news") {
        const filteredNews = news.filter((item) => item._id !== id);
        setNews(filteredNews);
      } else {
        const filteredVacancys = vacancys.filter((item) => item._id !== id);
        setVacancys(filteredVacancys);
      }
      setAlert(true);
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
      }, 1000);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
  };

  userActions = {
    getUsers: async (url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, { headers: config })
      ).json();
      data.then((res) => {
        if (res.message === "success") {
          setUsers(res.data);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
          setUsers([]);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },

    registerUser: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.message === "success created") {
          setAlert(true);
          setIsLoading(false);
          localStorage.setItem("token", res.token);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(true);
      }, 3000);
    },

    loginUser: async (body, url) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/${url}`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.success) {
          setAlert(true);
          setIsLoading(false);
          localStorage.setItem("token", res.token);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(true);
      }, 3000);
    },

    editUser: () => {},

    deleteUser: async (id) => {
      setIsLoading(true);
      const data = (
        await fetch(`${baseUrl}/user/${id}`, {
          method: "DELETE",
          headers: config,
        })
      ).json();
      data.then((res) => {
        if (res.message === "success") {
          const filteredNews = users.filter((item) => item._id !== id);
          setUsers(filteredNews);
          setIsLoading(false);
          setAlert(true);
        } else {
          setError(true);
          setIsLoading(false);
        }
      });
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
  };

  return (
    <UsersContext.Provider
      value={{
        scrollValue,
        news,
        newById,
        vacancys,
        vacancyById,
        isLoading,
        error,
        alert,
        modalClose,
        users,
        media,
        banner,
        photos,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const ScrollProvider = ({ children }) => {
  const [scrollValue, setScrollValue] = useState(0);

  smallActions = {
    handleScroll: (newValue) => {
      setScrollValue(newValue);
    },
  };

  return (
    <ScrollContext.Provider value={scrollValue}>
      {children}
    </ScrollContext.Provider>
  );
};
