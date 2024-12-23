# KTS-Food-HW-4

## Основные требования

1. **Логика на MobX**

   - Переписана логика загрузки, хранения и использования данных с использованием MobX.
   - Использованы observable и action поля для управления состоянием.

2. **MobX-сторы**

   - Реализовано разделение логики на отдельные MobX-сторы для улучшенной организации кода и поддержки масштабируемости приложения.

3. **Поиск**

   - Добавлена возможность поиска списка сущностей по введенной строке.
   - Значение введенной строки сохраняется в store и отображается в URL через query-параметр `search`.

4. **Пагинация**

   - Реализована пагинация сущностей с отображением текущей страницы через query-параметр `page`.
   - Значение параметра `page` сохраняется в глобальном QueryParamsStore и отображается в адресной строке.

5. **Фильтрация**

   - Добавлена фильтрация списка сущностей с использованием значения query-параметра `type` для выбранных типов блюд.
   - Поддерживается сохранение и использование выбранных значений в MultiDropdown компоненте.

6. **Query-параметры**
   - Введенные значения для поиска (`search`), фильтрации (`type`) и пагинации (`page`) сохраняются в query-параметрах URL.
   - При перезагрузке страницы состояния полей поиска, фильтра и пагинации восстанавливаются, отображая данные, соответствующие предыдущему состоянию.
