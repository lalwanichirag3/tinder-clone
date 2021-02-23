import React, { useState } from 'react'
import TinderCard from './TinderCard';
import './TinderCards.css'

function TinderCards() {

    const [people, setpeople] = useState([
        {
            name: "Elon Musk",
            url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhISFRUVFRUVFRUXFQ8VFRAQFRUWFhUVFRYYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFSsdHx0tKy0tKy0tLS0tKy0tLSstLS0tLS0tLSstLSstLSsrLSstLSstLS0rLS0tLSstLS0uK//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIEBAMFBQUHBQAAAAABAAIDBBEFEiExBkFRYXGBkQcTIqGxFTLB0fAUI0KC4SRDYqKywvEWUlNyc//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAgIDAQEAAAAAAAABEQIDIRIxIkETUWEyBP/aAAwDAQACEQMRAD8A4yjAUiCic42AWrwHhUuILgtrcOc2s/huDvlI0K6Dw7wiBYkLTYLw41gGi09PTBuwWd6tazmRBw3CWsA0VvHFZKa1LzAJTkrSmtSwmDMEkyq5EpQRPamo3p8FBahvalROTsjVHOiAmNKUSoscqeD0hg3FJDFnuKeM6WhBD3h8nKFhBk7XH8I8VzjE/axWSG0DGQNubXAkefEkWHhbzU3qRUldta1G4rhVP7TsRtYvjPcxtuPw+SkU3tPq2u+INeOYdlBPgWtAHoVN7Ocu0uKR7xcypvau0mz6d1urXj6ELZcO8SU1YD7mT4huwgtcO9juO6JlV9NFGnQE05wY0uN7DXQE6eCRQ4jHKCWOBta452OoPgevZPE2qnieK7HeC858TxZZ3L0VxTUAMd4LztxJNmndZPE2tz7LcStZpK7bTPu0LzHwfX+6mGuhK9EcPVoewa8k4S5QRo7IAgECkySgKnxHGWRg3KDWkswCpMUx1kYOqxnEHGzW3s5c0xziySUkNJsgtbjibjkC4Dljv+tH91kpZS43JukXS1LtWDcLAWJC2VBhrWDZTIYAFJa1Hut9wmONOtag0JmqnyhViLRz1AaFUVWKgc1WYpim+qpfeFxvqU4TUQYhmKtKc3WcwqlO5utTSxWCvUn4mp+6SElz1Fpllyi1D7IpJVluLsUlgY6RhBGX4oyNQLgZ2OHjqD8uatw5FRxvx2aRwiga10hF3F2bLGOWgtcrHH2iYgYjGXsN7/HkGcA7DTTTrZUld8d5Hm7iSTcaknoeyr3SgcvosrbVeofjublxBJ1JN7k9STujLhytfx1UHOb3F0bmE6m6WH8kz3/PmmTOM1xoVHc13NNmJ3QoxO1NmrOnyTcFe5jg9jnNPYkehGxUYRFE5lgjB8q3eEe0yvgIvIJ2aXZK0EkdA4ajx1Vq7jWIy/tFE0xPIJkhcLNeG6ubpp/FcEWIJO91yy6XHKRre1v1omPk7DxTxYyamEjCRmGx3a7mCuRTPLiXHmVKdVExht+9u/6soJKvUUuKQtII5Fds9nOOB7GglcPur7hbGjA8a6JwR6gjmBF1ErcRawalc8peOW5N+Sy3EfGxNw0oV9Nxj/F7WA2cuYY/xg55IaVma/E5JSSSVAKWp09U1Tnm7iUwUEFOkJBCyNAesQEsBEEa0aFKrxNpINlaXTUsQKCYc4S4vJOqtKTCLcloG0oToYAnpI1LSAKYLBNukUeSdI00OTUoKEDrqSWaJWjEARqi4uwj3rAb2sCL9jrqOey1jYlnOM/3UEkrnnRrsrbuDb20vlIv4G6i3VyOB10XxObfQOIvyNtLhHg+ByVEmVn3R953QfmnsMiM7w0F1yfTuV0/hzC2xtDWjQc+ZPVZeTv4xp4fF87/AIZwXgumY0ZmZndT+SsZuE6V1/3YF+1he56LQ00KmMi5EBc076v7dv8AHzP0yMnBdO4WyADp0PLVNO4KgF7N3A9eq3L4gAokkV1V8nRfDm/pgK3guIDTltpz5XVHV8GsGoPl9F0yph0VNUlZ/wA3UV/Dxf05PiPDrmE2VBJCQbHSy61XwgkrJcQ4c1rg4C1979V0+PyfL7cnn8E59xkwDfY2TkvIp+XTkCOx2SZHDL1/D+q2cv6REYKIoKkHhUuta6Zcb7oiUV0tAFEgggAgjQskBIXSXFJ1TwPW10LpKF1qsu6K6QXJt8qQOuemZJlHfMktYSgDdISlxxXT0UClxw2U3pUhFPGpbQg1qca1Qf0IBZL2ovY2gmzG2YBota5N7215G2q2ICwPtpI/YNf+9lupdfQDpzPl3Rha5pwRQkku0XVMMp7AeCy3s+oQIA48/ottGAFxeS709HxT48SLSkhHZSBDqmKMGymXNlXMibbpuaMWUKVlvBTybqJUMuq6kHNqpq3crqjqo97/APKvqqPdVszLi+6xsbTrGanjN7rM8RONiNNFsqto5LGcSx2F/wA7FX4/tn5vfLGvdr9Uh4tdCQ6pcux7LseYjIkEE0CKCNBICREonOSRcp4Cmm5stXg+CNcy51JWdpaQkgrd4FM1oF1UgZjEcHLXbJn7OW0rGCV2g0SfstVh47KXJDpFHknUd0pKFJMk6YzEoo47qbDAlbh4ZihU2GBORx2T7WqLdVgmMTrWo2tTjWpYNBrUsBGAjVYkVlk/aZhH7TQzAfeYPeN/k+IgeIC1pUWsaHMe07FpB8CLIojAcNWbGwDYNHpZXzJWAgOc0HubLHxZhE0Rnawvrew/4U2DAzUMsZSwcsoG/muOc7XpbkbqmkFtCLJ9s/LRYek4aqofiZVl4H8LrajorjD8QLnFjtHDcfj4LSTGf20JkGyYk8VXYhVe730WYrJZqs5I3ljQdXDS6foYv8RqIwNXj8fkqeSpaRo66qHcFkXJqnOvuA5VtZRGG4DyeRuSbjlz37rO8RfPf9xa1UgH6CocSaHCxF97oQSOB+I3HLsiqXaFLMp27GCxSlySEDY7JeE4eZnuYOTC70t+am4q28g8FZcGSiOaUuPwOiLTpf4rgt/3eq6ZfTgvH5ZGSq6YxuIKYV7xVbOSNlni5VjG/ZRck3unI4C5WdJht+SchK6GlLlbUeGdlc0WF9loKDByeSuRWKSjwvsraCg1tZaWlw1rR3USrAang0dPRtaE7lHRQX4i1rdVA+1x+iqkRrogBKkwwJ6GnUtjLLG9N5CIobKSxqJrU81qnBoNanWtQaE40K5E6NoSwEQSwggsiJQc5IBSpwHFMStuD4KUGpLmqFz05vRwDI5u1ibdrG2qqK6nrDnbFIY25SWaWu47A3FrXG/cLVe6AmnFv7x2nib6eqkNbmAvcHqNNPRc/P8A0783ljsAwisMcjqmVwcLBmX3ZOl7lxZbq3nyKu8MppozHJI+/Kx1IBHXmNlcMwwv3c8ju4n5bfJRcRAa5rW8iFffWl4+P0HFFV+7OnJZaHDXyRx2lGU2Lm3AtffQ/e576baKx4mkNgPD0SOHoGPGU+V+izl9tu/Hklinq+EqkTuc2YmAOuGl8mYM1+EADLzAv28lXT09QHFocZG+BJaPHRdEmwZuwLwL7BxA9FG/Y2R3aweJJJv5rXruWOfjx/0zFHREjMemmw/qoGKDLotZWStAy6LFY9Prp1WO21tkkZ3EW3kaOqtjRlsbC02Dn5SB949STy3TOF0QlmbfbQHzV1VwZY4yT/E0H6fRb2/Uc/j5/K1l8YotS3oqZmH6rW1UnvHOPUn05IU+HXOy2ji7m9Wqqhw3bRaOgwq9tFZYfhgG6uYYw1aTlG4j0WFNGpVkGhqjy1jW81RYlje9leJ1c1uItYN1lsUxa6rJ8SuTcqorqxKhKrMT7qu+01BecyR7pGh6naE4xqNrU6AsZG1oNanWhEAlBVhFNCWEgJQQRYKCTdEXJWgJHIo0096dgS+zSbJt6cCbejBrDYo/LUzj/ED6tapdG39fRV/EMn9rk/k/0NU2hcbfRcV/6r1PH1+EWvvgG9Fnnv8AeTDYC99Ty6qZO4k67DdZ3EaGdsjpWODm7tbffn5FXPaufXsnjC7TvuofD9SY3ta/XMND0O6o8ZfPM4ZgWW3O9ulhspuD0smdjnOJDTe5td3awR1yf8ny9OnNkDm3BvdUuKabHZIo6sxkj+E/IqLjNUErPRc+qoq1x1+I6+G6zmMvBcAOVlY1lVe9juqiq3KXE9o8nWn8Ca4udl5WN+QGv5KTX1WdrWDUXuTawvtYev0QwOOzHv5ZgPQA/wC5E+Rpf8OwsB5brbmfLpj318PHv9nKOiVrDEAo8LtEU9VZdnPOPOtqyFSG7qBW4wBoFRVuJd1TurS46KtSv5a+4uSqDFMQ3skyymypqqXMbI0HopSUipelwN0TFRqVGGS2RL94EcNIXKV9mlVgepGhLASQlXWTQoI0m6IuRoOXQzJq6UFNp4VdHZG1qdDUsPUR4TsBQmCbidqrkTanhNyFBrkiVyZawWPj+2Sdwz/SB+CeoSW/n0TPGPwVMT9g9uX+Zp/Jw9FMo7Pb5clw9yzuvT8dl4hT9vH8lGkkY22d7QO5Av6qux2omsREMoA1kIP+Uc/ErP02FxPBdM+Qk885N/ROTW3HuNJOyB2bMY/i2OZmtuY1TLadrRdjgfMG/mqCTB6V+z3Ot0ebeHVU9TSe7P7l72G+nxXFvx5J/H/VdST6bgyaG/gqivL3AgfoJvA3T6h9nX52c0lW80Qjju77ziT4Dklax3WL/ZzmN/BR6xtr/rVT6ibUu6k/r5Kqrp9CUc7rPrJEeOseAWhxAJ1Hy/BSKecBZ0VZa9wO30Nk4+sXZzjg661qPtHuidiIWPkrDyKKOtcO601HyaOptJyS4MJAHRR8FlL9SCByVtLVtYN0xcqmxSlLW6HUqjbRvv8AdK0Qd7xyvKTDgLaJ1OMvTYe4oRYb8RutfPTtab6KmqKtrb2UarCYaNrRqnczOypavE+6gfaBS+z9R6oBQzJrOgCs7VYczI0lrU81qX2f0JrU81qJoSwqkK0pqUkXQzJ4nSZlCcbFTXFQahOFqVHIikcoMc1k4+ZPCUvFeH+/hLW/fac7P/YcvMXHosbhWNPjNiDa9jvdrtiCOq3lXMACSQBzJ2C49W8Uh1fMAAYnPDWFtvvNGXNpvcj6LDy8b7jq8Pkz1XRX1BkF2j5aHxUaTBI36kWPO1wCT1CrsBxprvhJ7K1mxHLpbS2/0uuXmWV2bKgy8PsG2ngoTsJay7mC56uVs+vIF3DTvooH2oHE22V9af4ktne0Em4P4KkxOve82N/6J/F8btdosRtZZyXEdylzzWfXc+tKq5lUzSZ3W5DU/kikmdIbD16J9sOUW9e5WsmML18mfrB+8d+uSZcSpWIss8+Cjhbc1y9fdJCl4dSGV4aNtyegTAYrzh1oaT1K1tyJk9tbRUADQABYBZ/iRt3iNvLU/ktMKsRxlx6aDqeSy0jxcudqSbk91nx/bSwmgpi2xvZXX2tkbY2Kz81fZVdTXEq/tPqLfEMYJvqqSesJUdziUlORNoySULIIK8S9WtTzGJuEKQFzyN7SmhLCRdHdVInTgKGZNFyIvTTaezJJemS9IdImR4vUecqoxziampGkzStaeTB8T3eDRqub437V5XXbSwtYOT5Pid45RoPUotkGOkYhWshaXyPaxo3LiAPmsZjHtPgjBbA10zuv3YwfE6nyC5bimKz1Ds00r5DyzHRvgBoPJRAFF6PFtxBxTVVZ/eyEN5Rtu1gHcfxeapg4tc0jcajxBuElpuSjm5JB0arwwyRMqqckFzQ8gX5i59FWxcQVDLg5Sed7gqV7N8WBa6ncdW3ezuw/eHkdfNaLGuH45hnAseZGh8R1WUuXK7JPnzOpWVmx2V41bp4tKjS18p6AeP5IVmEvjPwuuByNwVFbTvPQKvSb8v2alf1N01HA6Q9lYRUA3KnwwgbKbROEOnog0JuZqspjYaKGI7lTrTMjM4r97yuoIKlYo68j+xt6aKLZbT1HFbtqVBI3mrenLQLtKzwKejkI2KfypryprjzKq6it6KO9+bmmixXzZSto3SEpKCJaYzGiQR2TABHZBKTD1g0JV01nSS9Y40tP5kkvTJeoOK4tDTMMk0jWNHM8z0A3J7BPE6sjIm5JwASSABqSdgBzK5VjftZ1y0kNx/5Jbj0YD9SFkca40raqMxSyNDHfeaxoYHdidyO10vlDxv8AH/atFG4spY/fEf3hOWP+Xm75BYzEPaJiEtwJWxg8o2AaeJuVkwEZCj5U8g3vLiXOJJJuSSSSepJ3SEabcUhSwdUtxsCUhmiDz163smRtgSpUQOqOXqgFUNS6J7XsNnNOZp/XLcea6/gGNtmja69mu3/wO5tPTVcZ13V5wzjrqWS+8btHt3062U9c618Xk+N9/To+M0g3tp56rOujstvTU7KiIPje4NcAQBZzbdgdvVUz8JOYg27dws507sl9qRrQU4WABXrMCQq8Ls3Qa/VUMZpzSUiduRjnnZoJPkFdfsJYAXBZ7jOrDYhGN3n/ACt3/AeaXMlrPybzzaxMjrkk7nU+JRluiIDVOk6fNa1wQwEpqII2pGUEd0kI0GMgFIMaWiTnVhWSmwjSyiIW3PcqLyJGisjWpPUpekmRR3SJl0qyUi8ScQxUcJlkPZjRq57+QAXB8axmerf7yd5cbfCNmsB1s0cvqrPj7GH1NW8G4ZEXRsb0ymzneJI9AFnw3Q+AWfV04GVKa1AcvBG1Th6MoPQ5FJcdu/p5oIlyRdCQ+aOMIBWvh4fmkvSympTogAzknHm1++hHbkUhgRv109PyQCcpDc1jbbsSNT9UjUan+ikU8YMUzhfMzI7s6NzshFuuYtN+yagZnaW2bduZ+bW5bYXaeoFrjTmU5NJqeD+KJqOQROGaJzw1zDuwuIBcw8t722PZdk9wx+VzdQdVwzhCma+eMPF7AlvS4O5Hr8l3CiOVgttYfJY+WSV3f+ffj9rBlO0jb8Eh+GtJ/NPsdoP1onmrONlfUYe0Ak5QACSegG91wHinEhUVEj2/cvlj/wDmDofPfz7LrftWxd0NII23vUO90T0ZlLn+oFvMrhzlrxP25PP3b+I2sRkWve31TssOVrTe9+VrW8DfXboExe+n6KtgQ8INRvSWIBSNE1GgDQCAF0AEARCBCNyNm9kGQHJecdE2RqizKp11Pql6f//Z"
        }
]);

const swiped   = (direction, nameToDelete) => {
    console.log();
}

const  outOfFrame = (name) => {

}
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div 
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>

           
        </div>
    )
}

export default TinderCards
