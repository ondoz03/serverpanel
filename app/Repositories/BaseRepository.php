<?php

namespace App\Repositories;

use App\Interfaces\Repositories\RepositoryInterface;

abstract class BaseRepository implements RepositoryInterface
{
    protected $model;

    public function __construct()
    {
        $this->makeModel();
    }

    abstract protected function model(): string;

    private function makeModel(): void
    {
        $this->model = app($this->model());
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    public function findBy(string $field, $value)
    {
        return $this->model->where($field, $value)->get();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $record = $this->find($id);
        $record->update($data);

        return $record;
    }

    public function delete($id)
    {
        return $this->find($id)->delete();
    }
}
