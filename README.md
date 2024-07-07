# switching-element-themes-react-practice
src/components/Tasks.jsx
Реализуйте компонент <Tasks />, добавив в него логику переключения темы. Тема определяет классы, применяемые к конкретной задаче. По умолчанию используется светлая тема (light). При клике на задачу она должна поменяться на темную (dark). Классы для тем описаны в самом компоненте.

Задача со светлой темой:

<div class="mt-3">
  <ul class="list-group">
    <li class="list-group-item d-flex bg-light text-dark">
      <span class="mr-auto">
        <a href="#" class="text-reset">Текст задачи</a>
      </span>
    </li>
  </ul>
</div>
Задача с темной темой:

<div class="mt-3">
  <ul class="list-group">
    <li class="list-group-item d-flex bg-dark text-light">
      <span class="mr-auto">
        <a href="#" class="text-reset">Текст задачи</a>
      </span>
    </li>
  </ul>
</div>
Обратите внимание, что задачи должны выводиться так, чтобы наверху были свежие, а ниже старые.

src/actions/index.js
Реализуйте действия, необходимые для смены темы.

src/reducers/index.js
Реализуйте редьюсер для обработки UI состояния.
