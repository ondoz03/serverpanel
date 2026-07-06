<?php

namespace App\Interfaces\Repositories;

interface RepositoryInterface
{
    public function all();

    public function find($id);

    public function findBy(string $field, $value);

    public function create(array $data);

    public function update($id, array $data);

    public function delete($id);
}
