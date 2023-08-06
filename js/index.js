async function ShowForm() {
     const TOKEN = "6085674793:AAEq_cdVIzJwpbj6_B02MGOgcFZu0bvjqVY";
    const CHAT_ID = "-1001624297782";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

        const { value: formValues } = await Swal.fire({
          title: 'Запони форму',
          confirmButtonText: 'Отправить',
          html:
            '<input placeholder = `Имя телефона`  id="swal-input1" class="swal2-input">' +
            '<input placeholder = `+7(999)-999-99-99` id="swal-input2" class="swal2-input">',
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          }
        })
        
        if (formValues) {
            console.log(formValues)
          Swal.fire({
            icon:`success`,
            title:`Отправлено`
          })
          axios.post(URI_API,{
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: `<b> Отправитель:</b> ${formValues[0]} <b> Телефон:</b> ${formValues[1]}`
        })
        }
        else {
          Swal.fire({
            title:`Первый выгул Бесплатно!`,
            icon:`warning`
          })
        }
        
        };

        function ShowWalk() {
          swal.fire({
            title:`Выгуливаем с gps трекером, в конце прогулки высылаем вам маршрут и фото вашего любимца`,
            icon:`info`
          })
        };

        
        function ShowSit() {
          swal.fire({
            title:`Выгуливаем 2-3 раза в день, кормим и играем с вашем любимцем. каждый день высылаем отчёты`,
            icon:`info`
          })
        };

        
        function ShowSitHome() {
          swal.fire({
            title:`выгуливаем и играемся с вашем любимцем, высылаем отчёты`,
            icon:`info`
          })
        };



        const TOKEN = "6085674793:AAEq_cdVIzJwpbj6_B02MGOgcFZu0bvjqVY";
        const CHAT_ID = "-1001624297782";
        const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    
        document.getElementById('tg').addEventListener('submit',function(e) {
          e.preventDefault();
           let message = `<b> Отправитель:</b> ${this.name.value} <b> Номер:</b> ${this.number.value}`;
    
           axios.post(URI_API,{
               chat_id: CHAT_ID,
               parse_mode: 'html',
               text: message
           }).then(res => {
            this.name.value = ``;
            this.number.value = ``;
              Swal.fire({
                icon:`success`,
                title:`Отправлено`
            });
           });
        });