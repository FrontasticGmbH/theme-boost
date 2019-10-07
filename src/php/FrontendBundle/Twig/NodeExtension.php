<?php

namespace Frontastic\Catwalk\FrontendBundle\Twig;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Psr\SimpleCache\CacheInterface;

use Frontastic\Catwalk\FrontendBundle\Domain\NodeService;
use Frontastic\Catwalk\ApiCoreBundle\Domain\TasticService;
use Frontastic\Catwalk\FrontendBundle\Domain\FacetService;
use Frontastic\Common\ProductApiBundle\Domain\ProductApi;
use Frontastic\Common\ProductApiBundle\Domain\ProductApi\Query\CategoryQuery;
use Frontastic\Catwalk\ApiCoreBundle\Domain\Context;

class NodeExtension extends \Twig_Extension
{
    /**
     * @var \Symfony\Component\DependencyInjection\ContainerInterface
     */
    private $container;

    /**
     * @var \Psr\SimpleCache\CacheInterface
     */
    private $cache;

    const CATEGORY_CACHE_KEY = 'frontastic.categories';

    public function __construct(ContainerInterface $container, CacheInterface $cache)
    {
        $this->container = $container;
        $this->cache = $cache;
    }

    public function getFunctions(): array
    {
        return [
            new \Twig_Function('frontastic_tree', [$this->container->get(NodeService::class), 'getTree']),
            new \Twig_Function('completeInformation', [$this, 'completeInformation']),
        ];
    }

    public function completeInformation(array $variables): array
    {
        $request = $this->container->get('request_stack')->getCurrentRequest();

        return array_merge(
            [
                'node' => null,
                'page' => null,
                'data' => null,
                'tastics' => $this->container->get(TasticService::class)->getAll(),
                'facets' => $this->container->get(FacetService::class)->getEnabled(),
                'categories' => $this->getCategories(),
                'route' => [
                    'route' => $request->get('_route'),
                    'parameters' => array_merge(
                        $request->query->all(),
                        array_filter(
                            $request->attributes->all(),
                            function ($value, $key) {
                                return $key[0] !== '_' && ($key !== 'nodeId') && is_string($value);
                            },
                            ARRAY_FILTER_USE_BOTH
                        )
                    ),
                ],
            ],
            $variables
        );
    }

    private function getCategories(): array
    {
        if (!($categories = $this->cache->get(self::CATEGORY_CACHE_KEY, false))) {
            $context = $this->container->get(Context::class);
            $categories = $this->container->get(ProductApi::class)->getCategories(
                new CategoryQuery([
                    'locale' => $context->locale,
                    'limit' => 100,
                ])
            );

            $this->cache->set(self::CATEGORY_CACHE_KEY, $categories, 3600);
        }

        return $categories;
    }
}
