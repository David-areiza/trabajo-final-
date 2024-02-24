import { useEffect, useState } from "react";

function useConsultCountry() {
  const [country, setCountry] = useState({});
  const [code, setCode] = useState("");

  useEffect(() => {
    if (code) {
      fetch(`https://countries.trevorblades.com/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Country($code: ID!) {
              country(code: $code) {
                code
                name
                capital
                continent {
                  code
                  name
                }
                currency
                native
                phone
                languages {
                  name
                }
                states {
                  name
                }
              }
            }
          `,
          variables: { code: code },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCountry(data.data.country);
        })
        .catch((error) => {
          console.error("Error fetching country:", error);
        });
    }
  }, [code]);

  return {
    country,
    setCode,
  };
}

export default useConsultCountry;


